import React from "react";

import { Routes, Route, Link } from 'react-router-dom';

import Counter from "./counter";

import { ArticleList } from './pages/ArticleList';
import { Article } from "./pages/Article";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Layout } from "./Layout";
import { CreateArticle } from "./pages/CreateArticle";
import { EditArticle } from "./pages/EditArticle";

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<ArticleList />} />
          <Route path="article/:slug" element={<Article />} />
          <Route path="article/:slug/edit" element={<EditArticle />} />

          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="article/new" element={<CreateArticle />} />
          <Route path="*" element={<ArticleList />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;