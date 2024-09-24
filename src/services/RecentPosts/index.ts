"use server";

export const getRecentPosts = async () => {
  const fetchOptions = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/items?sortBy=-createdAt`,
    fetchOptions
  );

  return await res.json();
};
