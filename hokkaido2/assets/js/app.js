
  //
  // まずは普通に地図を描画
  //

  // mapオブジェクトを取得:
  const map = L.map('map');
  //
  // データID (地図表示のタイプ)
  //
  // - "std": 標準地図 (普通)
  // - "pale": 淡色地図 (軽量)
  // - "blank": 白地図 (超軽量)
  // - "seamlessphoto": 写真 (重い)
  //
  // @see: https://maps.gsi.go.jp/development/ichiran.html
  //
  const dataId = "std";
  // 地図タイルレイヤーを作成:
  const layer = L.tileLayer(`https://cyberjapandata.gsi.go.jp/xyz/${dataId}/{z}/{x}/{y}.png`, {
    attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
  });
  // 地図タイルレイヤーをマップへ追加:
  layer.addTo(map);
  // 皇居(北緯35.6825, 東経139.752778)を地図の中心に。ズームレベルは5。
  map.setView([35.6825, 139.752778], 5);
  // // 地図タイルレイヤーを削除したいときはこのようにします:
  // map.removeLayer(layer);

  //
  // 地図クリックイベントハンドラをセット
  //
  // @see: https://leafletjs.com/reference-1.5.0.html#map-event
  //


  //
  // 特定地点にマーカーを置く
  //

  // 皇居(北緯35.6825, 東経139.752778)にマーカー:
  const mark = L.marker([35.6825, 139.752778]);
  mark.addTo(map);
  // マーカーに吹き出しを設定:
  mark.bindPopup('<h2>皇居</h2>こちらが<a href="https://tools.wmflabs.org/geohack/geohack.php?language=ja&pagename=%E7%9A%87%E5%B1%85&params=35_40_57_N_139_45_10_E_type:landmark_region:JP" target="_blank">皇居</a>です。');

  map.scrollWheelZoom.disable();
  map.on('focus', () => { map.scrollWheelZoom.enable(); });
  map.on('blur', () => { map.scrollWheelZoom.disable(); });
