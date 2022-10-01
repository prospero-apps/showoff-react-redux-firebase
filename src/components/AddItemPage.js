import React, { useState, useEffect } from 'react'
import '../style.css'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase.config'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useNavigate } from 'react-router-dom'

const AddItemPage = ({ isAuth }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  let navigate = useNavigate()

  const onImageChange = (e) => {
    setImage(e.target.files[0])   
  }

  const addItem = async(e) => {
    navigate('/')

    try {
      e.preventDefault()
      const storage = getStorage()
      let storagePath = 'uploads/' + image.name
      const storageRef = ref(storage, storagePath)
      const uploadTask = uploadBytesResumable(storageRef, image)
      const itemsCollectionRef = collection(db, 'items')

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100        
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at ', downloadURL)
          
          addDoc(itemsCollectionRef, {
            author: {
              name: auth.currentUser.displayName,
              id: auth.currentUser.uid
            },
            title,
            description,
            image: downloadURL,
            reviews: []
          })

          // setImage(null)

          navigate('/')
        })
      })
    } catch (error) { throw error }
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  })

  return (
    <div id='add-item-page'>
      <h1>Add Item</h1>
      <form id='add-item-form' onSubmit={addItem}>
        { image !== ''
          ?<img 
            className="add-item-main-image"
            src={URL.createObjectURL(image)}
            alt='preview'
          /> 
          :<div className='add-item-main-noimage'/>
        }
        <div className="add-item-data">
          <label htmlFor='add-item-title'>Title</label>
          <input 
            id="add-item-title"
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <label htmlFor='add-item-description'>Description</label>
          <textarea 
            id="add-item-description" 
            rows={10}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          <div>Image</div>
          <input 
            className='add-item-add-image' 
            type='file'
            accept='image/*'
            onChange={onImageChange}
          />   
          <button>Add Item</button>       
        </div>        
      </form>
    </div>
  )
}

export default AddItemPage
