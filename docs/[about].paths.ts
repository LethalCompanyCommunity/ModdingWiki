// ./[about].paths.js

// This has to be done to allow both guides to have the same about page without rerouting to the other guide. We can do a similar process with FAQs to keep the same format but with different content - or we can do them individually.
export default {
    paths() {
        return [
            { params: { about: 'extras/about' }},
            { params: { about: 'modding/extras/about' }}
        ]
    }
}