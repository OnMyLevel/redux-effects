import React from 'react';
import { connect } from 'react-redux';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}
let NewsItem = ({ article, user }) => (
article ?
<article style={articleStyle} >
  <div>
    <h1>{article.title}</h1>
    <img style={imgStyle} src={article.urlToImage} alt="" />
    <h4>{article.description}</h4>
    <a href={article.url}>READ MORE</a>
  </div>
</article> : user ?
<article style={articleStyle} >
<div>
  <h1>{user.id}</h1>
  <h4>{user.description}</h4>
  <a href={user.email}>Contact HiM</a>
</div>
</article> :
null
);
const mapStateToProps = (state) => ({
article: state.news,
user: state.user,
})
NewsItem = connect(mapStateToProps,null)(NewsItem)
export default NewsItem;


