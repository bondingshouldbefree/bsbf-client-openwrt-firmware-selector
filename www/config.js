/* exported config */

var config = {
  // Show help text for images
  show_help: true,

  // Pre-selected version (optional if provided by .versions.json)
  default_version: "SNAPSHOT",

  // Insert snapshot versions (optional)
  show_snapshots: true,

  // Image download URL (e.g. "https://downloads.openwrt.org")
  image_url: "https://downloads.openwrt.org",

  // Info link URL (optional)
  info_url: "https://openwrt.org/start?do=search&id=toh&q={title} @toh",

  // Attended Sysupgrade Server support (optional)
  asu_url: "https://sysupgrade.openwrt.org",
  asu_extra_packages: ["luci", "luci-app-attendedsysupgrade", "kmod-ifb", "kmod-nft-tproxy", "bsbf-bonding"],
  // Additional repositories for ASU build requests (optional)
  // asu_repositories: {
  //   my_feed: "https://example.com/packages/{openwrt_branch}/{target}/{subtarget}",
  // },
  // asu_repositories_mode: "append", // "append" or "replace"
  // asu_repository_keys: [
  //   "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----",
  // ],

  /* bsbf-add-client API URL */
  bsbf_add_client_url: "https://api.bondingshouldbefree.org/bsbf-add-client-test2",
};
