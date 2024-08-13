import { pool } from "../database/database.js";

class PostService {
  async getNavItems() {
    try {
      const [rows] = await pool.query("SELECT id, subtitle FROM `posts`");
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching NavItems");
      throw error;
    }
  }
    async GetLastPosts (){
    const sql = "SELECT subposts.subpost_id AS subpost_id, posts.id AS post_id, subposts.image AS lastImage,  subposts.title,  posts.subtitle,  subposts.subtext, subposts.created_at  FROM subposts JOIN posts ON subposts.post_id = posts.id WHERE posts.id = 3 ORDER BY subposts.created_at DESC LIMIT 4;";

    try {
        const [rows] = await pool.query(sql);
        return rows;
      } catch (error) {
        console.error("Error detected at feching GetLastPosts");
        throw error;
    }
}
  async GetLastArticles() {
    try {
      const [rows] = await pool.query(
        "SELECT subposts.subpost_id, posts.id, subposts.image, subposts.title, posts.subtitle, subposts.subtext, subposts.created_at FROM subposts JOIN posts ON subposts.post_id = posts.id WHERE posts.id = 1 ORDER BY subposts.created_at DESC LIMIT 3"
      );
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching LastArticles");
      throw error;
    }
  }
  async GetLastNews() {
    try {
      const [rows] = await pool.query(
        "SELECT subposts.subpost_id AS subpost_id, posts.id AS post_id, subposts.image, subposts.title, posts.subtitle, subposts.subtext, subposts.created_at FROM subposts JOIN posts ON subposts.post_id = posts.id ORDER BY subposts.created_at DESC LIMIT 4;"
      );
      return rows;
    } catch (error) {
      console.error("Error detected ad fetching LastNews");
      throw error;
    }
  }
   async GetPosts (category,subcategory){
    
    try {
        const [rows] = await pool.query("SELECT posts.id, posts.title, posts.subtitle, posts.content, posts.created_at, posts.views,posts.category AS post_category,subposts.category AS subposts_category FROM subposts JOIN posts ON subposts.post_id = posts.id WHERE LOWER(subposts.category) =LOWER(?) AND LOWER(posts.category) = LOWER(?)", [category, subcategory]);
        //console.log('Query parameters:', { type, subtitle }); optional thing to check query paramets :> 
        return rows;
    } catch (error) {
        console.error("Error detected ad fetching GetPosts");
        throw error;
    }
};
}
export default new PostService();
