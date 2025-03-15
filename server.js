import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';


const app = express();
const PORT = 5000;
const SECRET_KEY = 'your_secret_key'; // Замените на ваш секретный ключ

// Middleware
app.use(cors())
app.use(express.json());

let authUsers = [
    {
        id: 1,
        userName: 'YourName',
        email: 'your_email@example.com',
        password: 'YourPasswo12!!',
        text: 'Отличный сервис!',
        isLoggedIn: false
    }
];
// Маршрут для авторизации пользователя
app.post('/api/auth/login', (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const authUser = authUsers.find(u => u.email === email && u.password === password);

    if (authUser) {
        const token = jwt.sign({id: authUser.id, userName: authUser.userName}, SECRET_KEY, {expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).json({message: 'Invalid email or password'});
    }
});

// Пример данных
let users = [
    {id: 1, userName: 'Fedor', text: 'Отличный сервис! Быстрое обслуживание и приятный персонал.', isLoggedIn: false},
    {id: 2, userName: 'Max', text: 'Могло бы быть лучше, но в целом доволен.', isLoggedIn: false},
    {id: 3, userName: 'Alex', text: 'Невероятный опыт! Обязательно вернусь снова.', isLoggedIn: false},
    {id: 4, userName: 'Sanya', text: 'Все было на высшем уровне, рекомендую!', isLoggedIn: false},
    {id: 5, userName: 'Dimon', text: 'Очень вкусная еда и уютная атмосфера.', isLoggedIn: false},
    {id: 6, userName: 'Anna', text: 'Отличное место для семейного ужина.', isLoggedIn: false},
    {id: 7, userName: 'Olga', text: 'Персонал очень вежливый и внимательный.', isLoggedIn: false},
    {id: 8, userName: 'Ivan', text: 'Отличный выбор блюд, все свежее и вкусное.', isLoggedIn: false},
];

// Middleware для проверки состояния пользователя
const checkUserStatus = (req, res, next) => {
    const authToken = req.headers.authorization;

    if (authToken && authToken.startsWith('Bearer ')) {
        const token = authToken.split(' ')[1];

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};

// Маршруты
app.get('/api/users', checkUserStatus, (req, res) => {
    res.json(users); // Возвращает информацию о пользователе, если токен действителен
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: Date.now(),
        userName: req.body.user,
        text: req.body.text,
        isLoggedIn: true,
    };
    users.push(newUser);
    const token = jwt.sign({id: newUser.id, userName: newUser.userName}, SECRET_KEY, {expiresIn: '1h'});
    res.status(201).json({user: newUser, token});
});

app.put('/api/users/:id', (req, res) => {
    const index = users.findIndex(review => review.id === parseInt(req.params.id));
    if (index !== -1) {
        users[index].text = req.body.text;
        res.json(users[index]);
    } else {
        res.status(404).json({message: 'Review not found'});
    }
});

app.delete('/api/users/:id', (req, res) => {
    users = users.filter(review => review.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
