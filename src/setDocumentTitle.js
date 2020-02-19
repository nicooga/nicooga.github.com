import { useEffect } from 'react'

const DEFAULT_TITLE = 'Nicolas Oga'

const setDocumentTitle = ({ title = DEFAULT_TITLE, subtitle }) => {
  useEffect(_ => {
    document.title = subtitle ? title + ' | ' + subtitle : title
    return _ => document.title = DEFAULT_TITLE
  }, [])
}

export default setDocumentTitle
