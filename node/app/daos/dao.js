// dao.js is where all the cool daos meet

const daoCommon = require('./common/daoCommon')

const artistDao = {
    ...daoCommon, 
    ...require('./api/artistDao')
}

const albumDao = {...daoCommon, ...require('./api/albumDao')}

const bandDao = {...daoCommon, ...require('./api/bandDao')}

const labelDao = {...daoCommon, ...require('./api/labelDao')}

const genreDao = {...daoCommon, ...require('./api/genreDao')}

module.exports = {
    artistDao,
    bandDao,
    albumDao,
    labelDao,
    genreDao
}