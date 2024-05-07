<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>


    <div>
        @foreach ($res as $task)
        <li>{{ $task->titulo }}

            <p>
                {{ $task->post }}
            </p>
        </li>
        @endforeach


    </div>
</body>

</html>