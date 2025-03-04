import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Пример данных
let users = [
    { id: 1, userName: 'Fedor', text: 'Отличный сервис! Быстрое обслуживание и приятный персонал.', isLoggedIn: false },
    { id: 2, userName: 'Max', text: 'Могло бы быть лучше, но в целом доволен.', isLoggedIn: false },
    { id: 3, userName: 'Alex', text: 'Невероятный опыт! Обязательно вернусь снова.', isLoggedIn: false },
    { id: 4, userName: 'Sanya', text: 'Все было на высшем уровне, рекомендую!', isLoggedIn: false },
    { id: 5, userName: 'Dimon', text: 'Очень вкусная еда и уютная атмосфера.', isLoggedIn: false },
    { id: 6, userName: 'Anna', text: 'Отличное место для семейного ужина.', isLoggedIn: false },
    { id: 7, userName: 'Olga', text: 'Персонал очень вежливый и внимательный.', isLoggedIn: false },
    { id: 8, userName: 'Ivan', text: 'Отличный выбор блюд, все свежее и вкусное.', isLoggedIn: false },
];


// Middleware для проверки состояния пользователя
const checkUserStatus = (req, res, next) => {
    const authToken = req.headers.auth;
    if (authToken) {
        const user = users.find(u => u.token === authToken);
        if (user) {
            req.isLoggedIn = true;
            req.user = user;
        } else {
            req.isLoggedIn = true;
        }
    } else {
        req.isLoggedIn = true;
    }
    next();
};

app.use(checkUserStatus);

// Маршруты
app.get('/api/users', (req, res) => {
    res.json(users);
    // res.json(users.map(user => ({ id: user.id, userName: user.userName, text: user.text })));
});

app.post('/api/users', (req, res) => {
    const newUser = {
        id: Date.now(),
        userName: req.body.user,
        text: req.body.text,
        isLoggedIn: req.isLoggedIn,
        token: Date.now()
    };
    users.push(newUser);
    res.status(201).json(newUser);
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
