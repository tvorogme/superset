const profileViewContainer = document.getElementById('app');
const bootstrap = JSON.parse(profileViewContainer.getAttribute('data-bootstrap'));

// Replace values in Filter and Dashboard
export default function replaceTemplate(x) {
    const templates = {
        '{email}': 'Air',
    };
    if (x in templates) {
        return templates[x]
    } else {
        return x
    }

}