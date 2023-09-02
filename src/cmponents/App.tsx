import React from "react";

import { Routes, Route, Link } from 'react-router-dom';

import Counter from "./counter";

import { ArticleList } from './pages/ArticleList';
import { Article } from "./pages/Article";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Layout } from "./Layout";

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<ArticleList />} />
          <Route path="article" element={<Article />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<ArticleList />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;