(function() {
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

    const latestThunderstoreVersion = async packageUuid => {
        const res = await fetch(`https://thunderstore.io/api/v1/package/${packageUuid}/`);
        const pkg = await res.json();

        if (pkg.versions.length === 0)
            return `[Package ${packageUuid} has no versions published]`;

        return pkg.versions[0].version_number;
    };

    const _cache = {};
    const cache = (key, result) => {
        _cache[key] = result;
        return result;
    };

    const liveVersionsPlugin = (hook, vm) => {
        const getLatestVersion = async name => {
            const [type, key, extra] = name.split(":");
            let fetchedVersion;
            if (name in _cache) {
                fetchedVersion = _cache[name];
            } else if (type === "nuget") {
                fetchedVersion = await latestNugetVersion(key);
            } else if (type === "thunderstore") {
                fetchedVersion = await latestThunderstoreVersion(key);
            } else {
                return `[${name} invalid type '${type}']`;
            }

            const extraClass = (extra === "highlighted") ? "highlight" : "";
            const returnText = (extra === "raw") ? `${cache(name, fetchedVersion)}` : `<span class="fetched-version ${type} ${extraClass}">${cache(name, fetchedVersion)}</span>`;

            return returnText;
        };

        const replaceVersions = replaceAllAsync(/\%{([a-zA-Z0-9_:.-]+)}/g, getLatestVersion);

        hook.afterEach((content, next) => {
            replaceVersions(content).then(result => next(result))
                .catch(err => {
                    console.error(err);
                    next(content);
                });
        });
    };

    // Add plugin to docsify's plugin array
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], liveVersionsPlugin);
})();