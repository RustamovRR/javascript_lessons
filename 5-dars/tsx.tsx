const Button = React.memo((props) => {
    console.log('Render button component')
    return (
        <>
            <h1>{props.name}</h1>
        </>
    )
})

const Counter = () => {
    const [value, setValue] = useState(0);

    const handleIncrement = useCallback(() => {
        setValue((prev) => prev + 1)
    }, []);

    const handleDecrement = useCallback(() => {
        setValue(value - 1);
    }, [value]);

    console.log('App render component')

    return (
        <div>
            value: {value} // -1
            <br />
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
            <Button name='Jack' />
        </div>
    );
};

export Counter

// GET /api/book
interface Book {
    id: number;
    title: string;
    authors: string[];
}

const useLoadBooks = ({ url }) => {
    const [books, setBooks] = useState<Book[]>([])
    const URL = useRef(url)
    // const URL = 'url'

    useEffect(() => {
        loadBooks().then(() => console.log())
    }, [loadBooks])

    const loadBooks = useCallback(async () => {
        const fetched = await fetch(URL)
        const promiseRes = await fetched.json()
        setBooks(promiseRes)
    }, [URL])

    return { loadBooks, books }
}


const App = (props) => {
    const { loadBooks, books } = useLoadBooks({ url: 'url' });

    return (
        <>
            {
                books.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </>
    )
}

