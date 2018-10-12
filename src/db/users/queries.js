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
   * @param arg: user id in database
   * @return: promise of user data
   */
  async get (id) {
    // Query the db and await response
    return await
      this.ref()
      .doc(id)
      .get()
      .then(doc => {
        // Check if it exists
        if (doc.exists) {
          return doc.data()
        } else {
          throw ({code: 'users/queries/get/nonexistant-doc', message: `User with id ${id} does not exist.`})
        }
      }).catch(e => {
        throw (e)
      })
  },
  
  /**
   * Get multiple documents
   * 
   * @param limit: limit of query
   * @return: promise of documents
   */
  async getMult (limit) {
    // Query db for users in limit
    return await
      this.ref()
      .get()
      .then(snapshot => {
        var list = []
        
        snapshot.forEach(doc => {
          list.push(doc.data())
        })
        
        return list
      }).catch(e => {
        throw (e)
      })
  },
  
  /**
   * Loops through each user in the database
   * 
   * @param input: function to run when called
   * @param limit: of the query
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