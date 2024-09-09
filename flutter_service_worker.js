'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0c079d71c54a5b5fdf9e14e748241a22",
"version.json": "bfcc5620d4c89b78abd259ae1f886760",
"index.html": "24ae2823617570c5299453954d327a64",
"/": "24ae2823617570c5299453954d327a64",
"main.dart.js": "71eeb70d61024df3ae2175e8d451c14d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d91b1ae0b3ab555773cfb3f5a4439253",
"build/ios/Pods.build/Release-iphonesimulator/path_provider_foundation.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/DKPhotoGallery.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/Pods-RunnerTests.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/SwiftyGif-SwiftyGif.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/file_picker-file_picker_ios_privacy.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/SDWebImage.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/url_launcher_ios-url_launcher_ios_privacy.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/DKImagePickerController.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/Pods-Runner.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/file_picker.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/url_launcher_ios.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/device_info_plus-device_info_plus_privacy.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/SDWebImage-SDWebImage.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/keyboard_height_plugin.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/DKPhotoGallery-DKPhotoGallery.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/shared_preferences_foundation-shared_preferences_foundation_privacy.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/DKImagePickerController-DKImagePickerController.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/device_info_plus.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/shared_preferences_foundation.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/Flutter.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/SwiftyGif.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"build/ios/Pods.build/Release-iphonesimulator/path_provider_foundation-path_provider_foundation_privacy.build/dgph": "d6e3f526fd02401652b60076fd3a0c2c",
"assets/AssetManifest.json": "0307c1c0fd319a422dff6baed59dae3d",
"assets/NOTICES": "5547495a633d828a3e6bb26397accee3",
"assets/FontManifest.json": "01e20fc2289eba7692ae8d95ff48da74",
"assets/AssetManifest.bin.json": "fab62bf2b3ccd46323aea014591edc43",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/packages/appflowy_editor/assets/images/point.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/checkmark.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/upload_image%202.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/images/copy%202.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/clear.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/regex%202.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/case_sensitive.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/link.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color%202.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/regex.svg": "31424cd1f827bb7f237cd8e56c58f941",
"assets/packages/appflowy_editor/assets/images/clear_highlight_color.svg": "0b35a31822656c53578fb91acdfacb31",
"assets/packages/appflowy_editor/assets/images/toolbar/underline.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/text%202.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/left%202.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color%202.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/divider%202.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_ltr%202.svg": "16a42742a29ea1cf30253cd9429095cd",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl%202.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/strikethrough%202.svg": "82564a24aa7e82675d377431ac8fb075",
"assets/packages/appflowy_editor/assets/images/toolbar/link.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/right%202.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/bold%202.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/code%202.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/highlight_color%202.svg": "f8dd55016252c335c33e97fb39159882",
"assets/packages/appflowy_editor/assets/images/toolbar/code.svg": "2d41f509ac1e1b1eb60c9adedc75ce03",
"assets/packages/appflowy_editor/assets/images/toolbar/bold.svg": "51e86ea040233e6a093caf02eea0c5f4",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list%202.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/italic%202.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/center%202.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/quote%202.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/text.svg": "2b52bcda2b12945b27e859c414ef43c9",
"assets/packages/appflowy_editor/assets/images/toolbar/right.svg": "19968f066c5bccae9f3e059f04492850",
"assets/packages/appflowy_editor/assets/images/toolbar/text_color.svg": "b912db1bb9568af27b19e2946e38cf38",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/h3%202.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/numbered_list.svg": "a6072f727ea30c379dd5e0e2909790c4",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_rtl.svg": "a994493865a43a16af27155434be4a6c",
"assets/packages/appflowy_editor/assets/images/toolbar/link%202.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/toolbar/h1%202.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto%202.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/toolbar/h1.svg": "735f59f34690e55680453a0d018ada75",
"assets/packages/appflowy_editor/assets/images/toolbar/h2.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/italic.svg": "b96a655409eea41190182ae3ab3ed500",
"assets/packages/appflowy_editor/assets/images/toolbar/center.svg": "c44cf79c7fae101e6fb9daa8aaf62a54",
"assets/packages/appflowy_editor/assets/images/toolbar/h3.svg": "30d4699894d5de3b696b11cf678b35a0",
"assets/packages/appflowy_editor/assets/images/toolbar/quote.svg": "7d20ee07b7f80cc886294a43a0db0b3d",
"assets/packages/appflowy_editor/assets/images/toolbar/underline%202.svg": "fc86b2c49c42f5b9322a4ba76d066203",
"assets/packages/appflowy_editor/assets/images/toolbar/left.svg": "511106ad3206b6ccbf9702f22b0097db",
"assets/packages/appflowy_editor/assets/images/toolbar/h2%202.svg": "bf7b09c579a5db9e6392b01f95909347",
"assets/packages/appflowy_editor/assets/images/toolbar/bulleted_list%202.svg": "b9441734387d7df0122b9dc629ca6bbb",
"assets/packages/appflowy_editor/assets/images/toolbar/text_direction_auto.svg": "74b07c6cd726be519ea32060d7a4b78c",
"assets/packages/appflowy_editor/assets/images/check%202.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/checkmark%202.svg": "3dc55867deb579484c5702a79054bb0e",
"assets/packages/appflowy_editor/assets/images/point%202.svg": "50c7d9067a4a84945f1d79640589f501",
"assets/packages/appflowy_editor/assets/images/check.svg": "c7b016041b6a5b0ce7cd50b7277364ec",
"assets/packages/appflowy_editor/assets/images/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/delete%202.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/quote%202.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/uncheck.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/clear%202.svg": "f74736135d3ee5656b916262104469d0",
"assets/packages/appflowy_editor/assets/images/reset_text_color%202.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/reset_text_color.svg": "a9ecce95365f0b4636ad43cc054d87e4",
"assets/packages/appflowy_editor/assets/images/link%202.svg": "d323cd62b3df10a342e8e78ca50bf4e1",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left%202.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy%202.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center%202.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider%202.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/divider.svg": "b7677e94ef1007c39a1853588b177d1e",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share%202.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right%202.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_left.svg": "fcd2f1a9124961798dd7009f27172a64",
"assets/packages/appflowy_editor/assets/images/image_toolbar/copy.svg": "8aff328e13b4b3667a6fbe1046d691b2",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete%202.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_right.svg": "bf18d4c1654d502abea1d2c8aa010c30",
"assets/packages/appflowy_editor/assets/images/image_toolbar/delete.svg": "15cbb502f4554ee7a443207099cc839a",
"assets/packages/appflowy_editor/assets/images/image_toolbar/share.svg": "42aee34d22fd39e710e4e448bf654e29",
"assets/packages/appflowy_editor/assets/images/image_toolbar/align_center.svg": "e82165a5f6fb20a7ad3a6faf0ab735cc",
"assets/packages/appflowy_editor/assets/images/upload_image.svg": "67fac764479d7cded5e98f6fe58c75ef",
"assets/packages/appflowy_editor/assets/images/case_sensitive%202.svg": "1f93577f39711359040ffde3d815fdc6",
"assets/packages/appflowy_editor/assets/images/delete.svg": "4a8d17ccc8cd1bd44a472f66ad028a01",
"assets/packages/appflowy_editor/assets/images/uncheck%202.svg": "d94aa89207d28adebb0a4e11237f1c57",
"assets/packages/appflowy_editor/assets/images/quote.svg": "ba6e97b8ddde8bf842fe2a56d06003ad",
"assets/packages/appflowy_editor/assets/images/selection_menu/text%202.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox%202.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/number.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote%202.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/text.svg": "890a3a1b0a674b1fbd769f42520cfef7",
"assets/packages/appflowy_editor/assets/images/selection_menu/image.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/image%202.svg": "92468547c1be63604f0820e565a1a6c2",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/images/selection_menu/number%202.svg": "9dad0889a48bb8f0ff288a5c0b711ab4",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3%202.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/checkbox.svg": "b81c986f918f1bd859fe07717b1e9d59",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1%202.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h1.svg": "8135d2d5883f5cdd8776dca2dddb5f9b",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/h3.svg": "cd75480a77da1cabc7c5c2bf81325322",
"assets/packages/appflowy_editor/assets/images/selection_menu/quote.svg": "f58d378109520a8058edb4fed9d9ddbb",
"assets/packages/appflowy_editor/assets/images/selection_menu/h2%202.svg": "129cb4e93b4badba4805968b13d52098",
"assets/packages/appflowy_editor/assets/images/selection_menu/bulleted_list%202.svg": "7b22749438c843bc176fb559c924ad21",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color%202.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider%202.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/divider.svg": "098194a544d649f3545d35f301b0191f",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox%202.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/strikethrough%202.svg": "c82d154453ef6759daa7cebb397cf58c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold%202.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code%202.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/code.svg": "02ef07d8ea084d72dc2f4cc74a1b756d",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bold.svg": "7118c4686f95cedaa776faf7924c89a0",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/list%202.svg": "ed5fb52546835a9865541c1e2c06c20c",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list%202.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close%202.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/close.svg": "aa945f43dcd92bce9b5c810eb33940be",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic%202.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote%202.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3%202.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/numbered_list.svg": "1daa60662c6ab43e65ac96e9e930b745",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/link%202.svg": "d7a05e0d3a904118900ca7d8e3cf47b4",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/checkbox.svg": "eda1fb784a3429e96b42b7f24b7ea4c9",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1%202.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/heading%202.svg": "8e872c0f97c1740a2f9858523aeb7743",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h1.svg": "295c462eeb57150f11a2e747d9220869",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/text_decoration%202.svg": "e4dd4997dec353c1eb7cdfab039a49ef",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/setting%202.svg": "0cb728ff605b6f7457950f3a47d291f1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/italic.svg": "c8585c2f19414f94f26430e8eecc4bb3",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/color.svg": "d061328f2a2b335e121c44dccff39a43",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h3.svg": "ba38c1cdee5d41663df86128b73b835e",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/quote.svg": "dda6772a0e0d9b40e8aad07ff377ffc1",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/underline%202.svg": "472439a97df9c883661d818045a40d95",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/h2%202.svg": "88278b54319f416c66c1cf830fcf6c42",
"assets/packages/appflowy_editor/assets/mobile/toolbar_icons/bulleted_list%202.svg": "4d7dba759b6073003a84e5938aa043b2",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "049ad0beeb967b82d9213a657105e1a5",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/lib/fonts/GoogleSans-Bold.ttf": "deba95b7d07532f341ec21667aef6a03",
"assets/lib/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/lib/fonts/GoogleSans-Regular.ttf": "9b60b12d0be822174c4e5dde976a21b3",
"assets/lib/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/lib/fonts/InclusiveSans-Regular.ttf": "99c8769457d6969ffe9d19944ae9c11d",
"assets/lib/fonts/IBMPlexSans-Regular.ttf": "1286abb632c5a409a0a997d11c994e34",
"assets/lib/fonts/IBMPlexSans-Bold.ttf": "1ae7d0a8e83337da66631aeca59fbb02",
"assets/lib/assets/audio/rain.mp3": "b359e646e1eb95e37e9c4866d87103d0",
"assets/lib/assets/audio/cat.mp3": "91ea0132bdb58f8fa5fbe1bcb1949927",
"assets/lib/assets/audio/chicken.mp3": "a0da9912c339f669dfb9a1e40332f057",
"assets/lib/assets/audio/bird.mp3": "e438c548d40f01b2de0d77f09098e2ff",
"assets/lib/assets/audio/coffeeshop.mp3": "0e16115222952289c7dc34e2e5a92eed",
"assets/lib/assets/icon/logo_png%202.png": "68ce99aaa0bff345c5e151fde0ac9819",
"assets/lib/assets/icon/logo_png.png": "68ce99aaa0bff345c5e151fde0ac9819",
"assets/lib/assets/sound/coffeeshop.mp3": "0e16115222952289c7dc34e2e5a92eed",
"assets/AssetManifest.bin": "88f7490ea7bdffe8e4dda3182dae9134",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm%202.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js%202.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm%202.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit%202.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js%202.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.js%202.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit%202.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker%202.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
