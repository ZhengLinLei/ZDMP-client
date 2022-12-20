
const model = {}

const PAGES = ['model', 'terminal', 'profile', 'dataset', 'boost'];

// Insert here the extra code
model.isPage = (str) => {
    // Check if the page exists
    // If it does, return true
    return PAGES.includes(str);
}

module.exports = model;