import { $authHost, $host } from './index'


export const createArticle = async (article) => {
    const { data } = await $authHost.post('api/article', article)
    return data
}

export const getArticles = async () => {
    const { data } = await $host.get('api/article')
    return data
}

export const deleteArticles = async (id) => {
    const { data } = await $authHost.delete(`api/article/${id}`)
    return data
}

export const getOneArticle = async (id) => {
    const { data } = await $host.get('api/article/' + id)
    return data
}

