<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta content="yes" name="apple-mobile-web-app-capable">
  <meta content="black" name="apple-mobile-web-app-status-bar-style">
  <meta content="telephone=no" name="format-detection">
  <meta content="email=no" name="format-detection">
  <meta name="msapplication-tap-highlight" content="no">
  <title>Title</title>
  <script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
  <!-- <link rel="stylesheet" href="http://g.tbcdn.cn/thx/cube/1.2.1/cube-min.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css">
  <!-- build:css css/main.css -->
  <link rel="stylesheet" href="/assets/css/member.css">
  <!-- endbuild -->
</head>
<body>
  <div id="root">
  </div>
  <script crossorigin src="/assets/script/react.production.min.js"></script>
  <script crossorigin src="/assets/script/react-dom.production.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js"></script> -->
  <!-- build:js script/main.js -->
  <script>
      const userInfoId = '${userInfoId}';
      const gmTeamId = '${gmTeamId}';
      const userId =  '${gtplayerId}';
  </script>
  <!-- endbuild -->
  <script src="/assets/script/member.js"></script>
</body>
</html>
