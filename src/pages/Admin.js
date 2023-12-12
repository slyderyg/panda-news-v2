import React, { useState, useContext, useEffect } from 'react'
import { Card, Button, Container, Form, Stack } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { createArticle, getArticles, deleteArticles } from '../http/articlesAPI';
import { Context } from '..'

const Admin = observer( () => {
  const [article, setArticle] = useState({title: '', content: ''})

  const handleTitle = (e) => {
    let newArticle = structuredClone(article)
    newArticle.title = e.target.value
    setArticle(newArticle)
  }

  const handleContent = (e) => {
    let newArticle = structuredClone(article)
    newArticle.content = e.target.value
    setArticle(newArticle)
  }

  const addNewArticle = () => {
    createArticle(article)
    .then(data => {
      setArticle({title: '', content: ''})
      getArticles().then(data => articles.setArticles(data)).catch(error => alert(error))
    })
    .catch(error => alert(error))
  }

  const { articles } = useContext(Context)

  useEffect(() => {
    getArticles().then(data => articles.setArticles(data)).catch(error => alert(error))
  }, [articles])

  const handleDelete = (id) => {
    deleteArticles(id).then(data => {
      console.log(data)
      getArticles().then(data => articles.setArticles(data)).catch(error => alert(error))
    })

  }

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header>Add new article</Card.Header>
        <Card.Body>

          <Form.Control type="text" placeholder="Article title" value={article.title} onChange={(e) => handleTitle(e)}/>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control className='mt-3' as="textarea" placeholder='Article content' rows={3} value={article.content} onChange={(e) => handleContent(e)}/>
          </Form.Group>

          <Button className='mt-5' variant="outline-secondary" onClick={addNewArticle}>+ Add</Button>

        </Card.Body>
      </Card>

      <Card className='mt-3'>
        <Card.Header>Articles list</Card.Header>
        <Card.Body>
          {articles.articles.map(article => 
            <Card key={article.id} className='mt-3'> 
              <Card.Body>
                <Stack className='align-items-baseline' direction='horizontal'  gap={3}>
                  <Card.Title>
                    {article.title}
                  </Card.Title>

                  <Button className='ms-auto' variant="outline-secondary" onClick={() => handleDelete(article.id)}>Delete</Button>
                </Stack>
              </Card.Body>
            </Card>
          )}

        </Card.Body>
      </Card>
    </Container>
  )
})

export default Admin