import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { getOneArticle } from '../http/articlesAPI'
import { useParams } from 'react-router-dom'

const Article = () => {
  const [article, setArticle] = useState({title: '', content: ''})
  const { id } = useParams()


  useEffect(() => {
    getOneArticle(id).then(data => setArticle({title: data.title, content: data.content})).catch(error => alert(error))
  }, [])

  return (
    <Container>

          <Card className='mt-3'> 
            <Card.Body>

                <Card.Title>
                  {article.title}
                </Card.Title>

                <Card.Text>
                  {article.content}
                </Card.Text>

            </Card.Body>
          </Card>
        
    </Container>
  )
}

export default Article