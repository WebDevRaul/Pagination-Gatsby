const postsPerPage = ({ currentPage, postsPerPage, data }) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts
};

const pageNumbers = ({ postsPerPage, data }) => {
  return Math.ceil(data.length / postsPerPage)
};

export { postsPerPage, pageNumbers }