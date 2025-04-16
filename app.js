const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// contentsフォルダのパスを指定
const posts = fs.readdirSync(path.join(__dirname, 'contents')).map(file => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, 'contents', file)));
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

// 投稿データを取得する関数
const getPosts = () => {
    const postsDir = path.join(__dirname, 'contents');
    const files = fs.readdirSync(postsDir);
    return files.map(file => {
        const filePath = path.join(postsDir, file);
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    });
};

// トップページ
app.get('/', async (req, res) => {
    const posts = await getPosts(); // 投稿を取得する関数
    posts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); // 更新日時でソート
    res.render('index', { posts }); // index.ejsに渡す
});

// Aboutページ
app.get('/about', (req, res) => {
    res.render('about');
});

// Postsページ
app.get('/posts', (req, res) => {
    const posts = getPosts(); // 投稿を取得
    res.render('posts', { posts });
});

// 詳細ページのルート
app.get('/posts/detail/:id', (req, res) => {
    const postId = req.params.id;
    const posts = getPosts(); // 投稿を再取得
    const post = posts.find(p => p.id === postId); // IDで投稿を検索
    if (post) {
        res.render('detail', { post }); // detail.ejsに投稿データを渡す
    } else {
        res.status(404).send('Post not found');
    }
});

// コンテンツを読み込む関数
function loadPosts() {
    const contentsDir = path.join(__dirname, 'contents');
    const files = fs.readdirSync(contentsDir);
    const posts = files.map(file => {
        const filePath = path.join(contentsDir, file);
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    });
    return posts;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});