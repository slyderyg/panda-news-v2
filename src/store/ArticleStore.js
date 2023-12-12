import { makeAutoObservable } from "mobx"

export default class ArticlesStore {
    constructor() {
        this._articles = []
        makeAutoObservable(this)
    }

    setArticles(articles) {
        this._articles = articles
    }

    get articles() {
        return this._articles
    }

}