const messageTemplate = (original, parsed) => {
	return `Class attribute "${original}" should be trimmed to "${parsed}".`
}

module.exports = messageTemplate
