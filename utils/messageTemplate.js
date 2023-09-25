const messageTemplate = (tagName, parsed) => {
	return `Value of tag "${tagName}" should be trimmed to "${parsed}".`
}

module.exports = messageTemplate
