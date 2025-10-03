export const fetchContent =(page = 0, limit = 5) => {
    return new Array(limit).fill(0).map((_, i) => ({
        id: page * limit + i,
        title: `WikiTok Item #${page * limit + i + 1}`,
        description: `This is some sample data content for item #${page * limit + i + 1}`
    }));
};