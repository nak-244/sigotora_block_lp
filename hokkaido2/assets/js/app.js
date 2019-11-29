
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
  // 北海道の中心(北緯43.31216722473616, 東経142.86726950000002)を地図の中心に。ズームレベルは9。
  map.setView([43.31216722473616, 142.86726950000002], 9);
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

  // CRM札幌・札幌・メディカル札幌
  const crms = L.marker([43.06185899999999, 141.352265]);
  crms.addTo(map);
  // マーカーに吹き出しを設定:
  crms.bindPopup('<h4>札幌支店・CRM札幌支店・メディカル札幌支店</h4>北海道札幌市中央区北1条西3-2 井門札幌ビル 9F<br><br>【コールセンター・オフィス事務系】<br>CRM札幌支店<br>TEL : 011-219-7625<br><br>【販売・接客・軽作業・食品製造・配送等】<br>札幌支店<br>TEL : 011-210-1189<br><br>【医療・介護・調理師・保育士等】<br>メディカル札幌支店<br>TEL : 011-798-9531');

  // カテプリお仕事窓口（新札幌支店）
  const shins = L.marker([43.03793899999999, 141.47218899999996]);
  shins.addTo(map);
  // マーカーに吹き出しを設定:
  shins.bindPopup('<h4>カテプリお仕事窓口（新札幌支店）</h4>北海道札幌市厚別区中央2条5-7 カテプリ 2F<br>TEL : 011-890-8633');

  // 旭川支店
  const asahi = L.marker([43.76403900000002, 142.36074099999996]);
  asahi.addTo(map);
  // マーカーに吹き出しを設定:
  asahi.bindPopup('<h4>旭川支店</h4>北海道旭川市宮下通9-780-1 旭川駅前第一ビル 4F<br>TEL : 0166-26-7214');

  // 千歳支店
  const chitose = L.marker([42.82547799999999, 141.64725899999996]);
  chitose.addTo(map);
  // マーカーに吹き出しを設定:
  chitose.bindPopup('<h4>千歳支店</h4>北海道千歳市千代田町4-14 千歳第一ビルディング 3F<br>TEL : 0123-23-6833');

  // 北見支店
  const kitami = L.marker([43.79499000000001, 143.88560099999995]);
  kitami.addTo(map);
  // マーカーに吹き出しを設定:
  kitami.bindPopup('<h4>北見支店</h4>北海道北見市常盤町4-16-3 トキワビレッジ 2F<br>TEL : 0157-31-2403');

  // 道東支店
  const kushiro = L.marker([42.98772000000004, 144.38227400000005]);
  kushiro.addTo(map);
  // マーカーに吹き出しを設定:
  kushiro.bindPopup('<h4>道東支店</h4>北海道釧路市黒金町11丁目2番1号 黒金町MFビル 4F<br>TEL : 0154-25-9263');

  //
  // 地図：マップをクリックした後にのみズーム
  //

  map.scrollWheelZoom.disable();
  map.on('focus', () => { map.scrollWheelZoom.enable(); });
  map.on('blur', () => { map.scrollWheelZoom.disable(); });
