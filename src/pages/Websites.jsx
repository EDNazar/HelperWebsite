import { Card } from "antd"
import { Link } from "react-router"
const { Meta } = Card

export default function Websites() {
    function getFavicon(url) {
        try {
            const urlObj = new URL(url);
            return `${urlObj.origin}/favicon.ico`;
        } catch (error) {
            console.error("Invalid URL", error);
            return null;
        }
    }

    return (
      <>
        <Link to="https://react.dev/learn/adding-interactivity">
            <Card
                hoverable
                style={{
                width: 240,
                marginTop: 20
                }}
                // cover={<img alt="example" sizes="(max-width: 16px) 10px, 10vh" src={getFavicon("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input")} />}
            >
                <img alt="example" sizes="16px" src={getFavicon("https://react.dev/learn/adding-interactivity")} />
                <Meta title="React Adding Interactivity" description="https://react.dev/learn/adding-interactivity" />
            </Card>
        </Link>
        <Link to="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html">
            <Card
                hoverable
                style={{
                width: 240,
                marginTop: 20
                }}
            >
                <img alt="example" sizes="16px" src={getFavicon("https://www.typescriptlang.org/docs/handbook/2/everyday-types.html")} />
                <Meta title="Everyday types" description="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" />
            </Card>
        </Link>
        <Link to="https://mui.com/material-ui/all-components/">
            <Card
                hoverable
                style={{
                width: 240,
                marginTop: 20
                }}
            >
                <img alt="example" sizes="16px" src={getFavicon("https://mui.com/material-ui/all-components/")} />
                <Meta title="MUI Components" description="https://mui.com/material-ui/all-components/" />
            </Card>
        </Link>
        <Link to="https://ant.design/components/overview">
            <Card
                hoverable
                style={{
                width: 240,
                marginTop: 20
                }}
            >
                <img alt="example" sizes="16px" src={getFavicon("https://habr.com/ru/feed/")} />
                <Meta title="Habr" description="https://habr.com/ru/feed/" />
            </Card>
        </Link>

      </>
    )
}