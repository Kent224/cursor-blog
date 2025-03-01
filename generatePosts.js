const fs = require('fs');
const path = require('path');

const posts = [
    {
        "title": "グラス一つで変わる、日常の楽しみ",
        "image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940&auto=format&fit=crop",
        "content": "あなたの毎日の飲み物をもっと特別なものにするために、グラスの選び方と活用法を紹介します。"
    },
    {
        "title": "ワイングラスの種類と選び方",
        "image": "https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?w=900&auto=format&fit=crop",
        "content": "赤ワイン、白ワイン、それぞれに合うグラスの特徴と、ワインの味わいを引き立てる選び方を解説します。"
    },
    {
        "title": "ビールの美味しさを引き出すグラス",
        "image": "https://images.unsplash.com/photo-1616186793090-b49b8ca005e8?w=900&auto=format&fit=crop",
        "content": "ビールの種類ごとに最適なグラスを選ぶことで、泡立ちや香りの広がり方が変わります。そのポイントを詳しく解説します。"
    },
    {
        "title": "カクテルグラスの魅力と使い分け",
        "image": "https://images.unsplash.com/photo-1635232823121-e88ed96d8d5f?w=900&auto=format&fit=crop",
        "content": "おしゃれなカクテルをもっと楽しむために、グラスの形状による違いや、カクテルごとのおすすめグラスを紹介します。"
    },
    {
        "title": "お茶をもっと美味しく。ティーグラスの選び方",
        "image": "https://images.unsplash.com/photo-1542345812-78736207c9d7?q=80&w=2940&auto=format&fit=crop",
        "content": "紅茶や日本茶をより深く楽しむためのティーグラスの選び方や、見た目の美しさを楽しめるおすすめグラスを紹介。"
    },
    {
        "title": "水を美味しく飲むためのグラスの秘密",
        "image": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2940&auto=format&fit=crop",
        "content": "シンプルな水も、グラス一つで驚くほど味が変わる？ガラスの厚みや形状が与える影響について解説します。"
    },
    {
        "title": "オリジナルグラスの作り方",
        "image": "https://images.unsplash.com/photo-1558670460-cad0c19b1840?w=900&auto=format&fit=crop",
        "content": "世界に一つだけのグラスを作ってみませんか？オーダーメイドやDIYの方法を紹介します。"
    },
    {
        "title": "おしゃれなグラス収納アイデア",
        "image": "https://images.unsplash.com/photo-1602392032220-70d4c94094c5?q=80&w=2940&auto=format&fit=crop",
        "content": "お気に入りのグラスをもっと素敵に飾るための、実用的かつおしゃれな収納アイデアをまとめました。"
    },
    {
        "title": "耐熱グラスの便利な使い方",
        "image": "https://images.unsplash.com/photo-1613682221098-5e79b0e3aeeb?q=80&w=2940&auto=format&fit=crop",
        "content": "ホットドリンクや冷たいデザートにも使える耐熱グラス。その特徴とおすすめの活用法をご紹介。"
    },
    {
        "title": "グラスの正しいお手入れ方法",
        "image": "https://images.unsplash.com/photo-1616478476064-704c2f6f9e5f?q=80&w=2940&auto=format&fit=crop",
        "content": "グラスの輝きを長持ちさせるための洗い方や、傷つけずに保管する方法を詳しく解説します。"
    },
    {
        "title": "食卓を彩るペアグラスの魅力",
        "image": "https://images.unsplash.com/photo-1612283589929-d2a6e840ff1b?q=80&w=2940&auto=format&fit=crop",
        "content": "大切な人との時間を特別なものにする、ペアグラスの選び方やおすすめのデザインをご紹介。"
    },
    {
        "title": "グラスの歴史とデザインの変遷",
        "image": "https://images.unsplash.com/photo-1514910302306-4a3c3560e2c1?q=80&w=2940&auto=format&fit=crop",
        "content": "古代から現代まで、グラスのデザインや用途がどのように変化してきたのか、その歴史を振り返ります。"
    }
];

const outputDir = path.join(__dirname, 'contents');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

posts.forEach((post, index) => {
    const filePath = path.join(outputDir, `post${index + 1}.json`);
    fs.writeFileSync(filePath, JSON.stringify({
        title: post.title,
        image: post.image, 
        content: post.content
    }, null, 4));
});

console.log('Posts generated successfully!');
