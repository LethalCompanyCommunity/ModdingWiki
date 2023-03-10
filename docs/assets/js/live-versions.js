(function () {
    const replaceAllAsync = (pattern, replacer) => async input => {
        const keys = [...input.matchAll(pattern)].map(match => match[1]);

        const results = {};
        for (const key of keys) {
            results[key] = await replacer(key);
        }

        return input.replaceAll(pattern, (_, name) => results[name]);
    };

    const latestNugetVersion = packageId => {
        return fetch(`https://api.nuget.org/v3/registration5-gz-semver2/${packageId.toLowerCase()}/index.json`)
            .then(res => res.json())
            .then(top => {
                if (top.items.length === 0) return `[Package ${packageId} not found]`;
                const latest = top.items[0].items.findLast(entry => entry.catalogEntry.listed);
                return latest.catalogEntry.version;
            });
    };

    const _cache = {};
    const cache = (key, result) => {
        _cache[key] = result;
        return result;
    };

    const liveVersionsPlugin = (hook, vm) => {
        const getLatestVersion = async name => {
            if (name in _cache) return _cache[name];

            const [type, key] = name.split(":");
            if (type === "nuget") {
                return `<span class="fetched-version nuget">${cache(name, await latestNugetVersion(key))}</span>`;
            }

            return `[${name} invalid type '${type}']`;
        };

        const replaceVersions = replaceAllAsync(/\%{([a-zA-Z_:.-]+)}/g, getLatestVersion);

        hook.afterEach((content, next) => {
            replaceVersions(content).then(result => next(result));
        });
    };

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], liveVersionsPlugin);
})();