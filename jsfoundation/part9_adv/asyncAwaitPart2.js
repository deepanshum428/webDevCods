function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) resolve("Post Data fetched");
      else reject("Error fetch Postdata");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) resolve("Comment data fetched.");
      else reject("Error fetch Comment data");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    // const BlogData = await fetchPostData();
    // const CommentData = await fetchCommentData();

    const [BlogData, CommentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(BlogData);
    console.log(CommentData);

    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching blog data");
  }
}

getBlogData();
