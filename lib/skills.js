const _ = require("lodash");
let axios = require("axios");

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.API_TOKEN}`;

export async function getAllSkills() {
  try {
    const response = await axios.get("/skills?include=highlights.skills");
    return _.orderBy(response.data, ["name"]);
  } catch (error) {
    console.error(error);
  }
}

export async function getSkill(slug) {
  try {
    const response = await getAllSkills();
    return response.find((tag) => tag.slug === slug);
  } catch (error) {
    console.error(error);
  }
}

export async function getSkillSlugs() {
  try {
    const response = await getAllSkills();

    return response.map((skill) => {
      return {
        params: {
          slug: skill.slug,
        },
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getFeaturedSkills() {
  try {
    const response = await getAllSkills();

    return response.filter((skill) => {
      return [
        "laravel",
        "php",
        "vue",
        "javascript",
        "react",
        "next.js",
        "tailwindcss",
      ].some((e) => e === skill.name.toLowerCase());
    });
  } catch (error) {
    console.error(error);
  }
}
