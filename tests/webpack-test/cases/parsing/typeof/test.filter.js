const { FilteredStatus } = require("../../../lib/util/filterUtil");

module.exports = () => {
	return [
		FilteredStatus.PARTIAL_PASS,
		"require.include",
		"require.ensure",
		"support amd"
	];
};
