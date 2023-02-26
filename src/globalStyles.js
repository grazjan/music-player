import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        position: relative;
    }
    body {
        background-color: ${props => props.theme.colors.body_background_color};
        font-family: ${props => props.theme.typography.font_family};
        font-size: ${props => props.theme.typography.body_font_size};
        color: ${props => props.theme.colors.secondary};
    }
    .container {
        max-width: ${props => props.theme.container_width};
        margin-left: auto;
        margin-right: auto;
    }
    .container-sm {
        max-width: ${props => props.theme.container_width_sm};
        margin-left: auto;
        margin-right: auto;
    }
    .container-md {
        max-width: ${props => props.theme.container_width_md};
        margin-left: auto;
        margin-right: auto;
    }
    ul, ol {
        margin: 0;
        padding: 0;
    }
    .text-center {
        text-align: center;
    }
`

export default globalStyles