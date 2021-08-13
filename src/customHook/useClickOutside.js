import { useRef, useEffect } from "react"

function useClickOutside(handle) {
  let domNode = useRef()
  useEffect(() => {
    let maybeHandle = event => {
      if (!domNode.current.contains(event.target)) {
        handle()
      }
    }
    document.addEventListener("mousedown", maybeHandle)
    return () => {
      document.removeEventListener("mousedown", maybeHandle)
    }
  })
  return domNode
}

export default useClickOutside
