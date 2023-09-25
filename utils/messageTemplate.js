const messageTemplate = (original, parsed) => {
	return `Attribute "${original}" should be trimmed to "${parsed}".`
}

module.exports = messageTemplate
