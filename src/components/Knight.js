import React from 'react'
import styled from '@emotion/styled'

const PieceWrapper = styled.div`
  height: 3rem;
`
export const Knight = () => {
  return (
    <PieceWrapper>
      <svg
        id="light"
        enableBackground="new 0 0 24 24"
        height="100%"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <g>
          <path d="m17.5 19c-.2 0-.4-.1-.4-.3l-.4-.9c-1.1-2.1-1.1-4.5-.2-6.7 1.4-3.1.2-6.8-2.6-8.6l-1.9-1.1v2.1c0 .2-.1.4-.4.5l-5.5 1.6c-.7.1-1.1.7-1.1 1.4v.9c0 .1.1.3.2.4s.2.1.4.1l4.9-.4c.2 0 .4.1.5.3 0 .2 0 .4-.1.5l-.3.4c-2.3 2.6-3.5 5.9-3.6 9.3 0 .3-.2.5-.5.5s-.5-.2-.5-.5c.1-3.4 1.2-6.7 3.3-9.4l-3.7.3c-.4 0-.8-.1-1.1-.4s-.5-.7-.5-1.1v-.9c0-1.1.7-2.1 1.8-2.4l5.2-1.5v-2.6c0-.2.1-.3.3-.4.2-.1.4-.1.5 0l2.6 1.6c3.3 2.1 4.6 6.3 3 9.8-.8 1.9-.8 4 .1 5.8l.4.9c.1.2 0 .5-.2.7 0 .1-.1.1-.2.1z" />
        </g>
        <g>
          <path d="m13.5 19c-.1 0-.2 0-.3-.1s-1.2-1-1.2-3.4c0-1.4.5-2.4 1-3.3.5-1 1-2 1-3.7 0-.3.2-.5.5-.5s.5.2.5.5c0 2-.6 3.2-1.1 4.2-.5.9-.9 1.6-.9 2.8 0 1.9.8 2.6.8 2.6.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
        </g>
        <g>
          <path d="m21.5 24h-19c-.3 0-.5-.2-.5-.5v-2c0-.8.7-1.5 1.5-1.5h17c.8 0 1.5.7 1.5 1.5v2c0 .3-.2.5-.5.5zm-18.5-1h18v-1.5c0-.3-.2-.5-.5-.5h-17c-.3 0-.5.2-.5.5z" />
        </g>
        <g>
          <path d="m19.5 21h-15c-.3 0-.5-.2-.5-.5v-1c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v1c0 .3-.2.5-.5.5zm-14.5-1h14v-.5c0-.3-.2-.5-.5-.5h-13c-.3 0-.5.2-.5.5z" />
        </g>
      </svg>
    </PieceWrapper>
  )
}