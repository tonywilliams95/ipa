$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/eBayChrome.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Waheed Ahmed"
    }
  ],
  "line": 2,
  "name": "Adding Item in Shopping Cart",
  "description": "",
  "id": "adding-item-in-shopping-cart",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "chrome only validation",
  "keyword": "Given "
});
formatter.match({
  "location": "EbayChrome.chrome_only_validation()"
});
formatter.result({
  "duration": 7465814743,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Login with valid username and select item",
  "description": "",
  "id": "adding-item-in-shopping-cart;login-with-valid-username-and-select-item",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@chrome"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user is on Ebay homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user click on Sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user is logged in with valid username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is searching for watch",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user selected first watch",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user click on add to cart button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user click on proceed checkout button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Payment option getting display",
  "keyword": "Then "
});
formatter.match({
  "location": "EbayChrome.user_is_on_Ebay_homepage()"
});
formatter.result({
  "duration": 6288539618,
  "status": "passed"
});
formatter.match({
  "location": "EbayChrome.user_click_on_Sign_in_link()"
});
formatter.result({
  "duration": 3511128639,
  "status": "passed"
});
formatter.match({
  "location": "EbayChrome.user_is_logged_in_with_valid_username_and_password()"
});
formatter.result({
  "duration": 2124718844,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d76.0.3809.87)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027LT-41926\u0027, ip: \u0027172.20.12.129\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.34.522940 (1a76f96f66e3ca..., userDataDir: C:\\Users\\41926\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 76.0.3809.87, webStorageEnabled: true}\nSession ID: 4eaceb5eba18ef235673756676c31628\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:118)\r\n\tat com.cucumber.test.EbayChrome.user_is_logged_in_with_valid_username_and_password(EbayChrome.java:113)\r\n\tat ✽.Then user is logged in with valid username and password(src/test/resources/features/eBayChrome.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EbayChrome.user_is_searching_for_watch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayChrome.user_selected_first_watch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayChrome.user_click_on_add_to_cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayChrome.user_click_on_proceed_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EbayChrome.payment_option_getting_display()"
});
formatter.result({
  "status": "skipped"
});
});