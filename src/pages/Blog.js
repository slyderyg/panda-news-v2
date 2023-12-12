import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '..'
import { Card, Container } from 'react-bootstrap'
import '../index.css'
import { getArticles } from '../http/articlesAPI'


const Blog = observer(() => {
  const { articles } = useContext(Context)

  useEffect(() => {
    getArticles().then(data => articles.setArticles(data)).catch(error => alert(error))
  }, [])

  return (
    <Container>
        {articles.articles.map(article => 
          <Card key={article.id} className='mt-3'> 
            <Card.Body>

                <Card.Title>
                  {article.title}
                </Card.Title>

                <Card.Text className='text__cutter'>
                  {article.content}
                </Card.Text>

            </Card.Body>
          </Card>
        )}
    </Container>
  )
})

export default Blog