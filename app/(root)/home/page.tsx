import { RootState } from '@/app/store'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const count = useSelector((state: RootState) => state.auth.accessToken)
    return (
        <div>

        </div>
    )
}

export default Home