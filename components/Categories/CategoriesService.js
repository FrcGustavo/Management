const category = require('./CategoriesModel');

class CategoriesService {
    constructor() {
        this.category = category;
    }

    async findAll() {
        const categories = await this.category.findAll({ order: ['category_key'] });
        return categories;
    }

    async findCategory(categoryId) {
        const category = await this.category.findOne({ where: { category_key: categoryId }});
        return category;
    }

    async createCategory(category) {
        const createdCategory = await this.category.create(category);
        return createdCategory;
    }

    async updateCategory(category, categoryId) {
        const updatedCategory = await this.category.update(category, { where: { key: categoryId }});
        return updatedCategory;
    }

    async countCategories() {
        const count = await this.category.count({ col: "category_key"});
        return count;
    }
}

module.exports = new CategoriesService();