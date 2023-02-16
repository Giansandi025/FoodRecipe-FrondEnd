import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailUser } from '../redux/actions/users'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => {
    return state.user
  })
  const refresh = () => {
    dispatch(getDetailUser())
  }
  useEffect(() => {
    dispatch(getDetailUser())
  }, [])
  return (
        <div>
            <h1>Home</h1>
            <button onClick={() => refresh()} style={{ marginLeft: '10px' }}>Refresh</button>
            <hr />
            {
            user.isLoading
              ? (<div>Loading...</div>)
              : user.isError
                ? (<div>Internal Server Error</div>)
                : JSON.stringify(user.data)
            }
        </div>
  )
}

export default Home
