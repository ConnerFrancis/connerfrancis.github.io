import db from '@/db'

export default {
  
  /**
   * Simply returns the collection reference
   */
  ref () {
    return db.collection('users')
  },
  
  /**
   * Queries any given user id
   * 
   * @id user id in database
   * @return promise of user data
   */
  async get (id) {
    // Return and await a response from a db query
    return await
      this.ref()
      .doc(id)
      .get()
      .then(doc => {
        // Check if it exists
        if (doc.exists) {
          return doc.data()
        } else {
          throw ({code: 'users/queries/nonexistant-doc', message: `User with id ${id} does not exist.`})
        }
      }).catch(e => {
        throw (e)
      })
  },
  
  /**
   * Loops through each user in the database
   * 
   * @callback function to run when called
   * @limit limit of the query
   */
  async forEach (callback, limit = 1) {
    return await
      this.ref()
      .limit(limit)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // TODO fill in callback logic
        })
      })
  }
  
}