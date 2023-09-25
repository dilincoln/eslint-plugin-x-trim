const messageTemplate = (tagName, parsed) => {
	return `Attribute of tag "${tagName}" should be trimmed to "${parsed}".`
}

module.exports = messageTemplate
