ToDoApp.controller('ToDoController', function ($scope) {

    $scope.todoList = [];
    $scope.lomakkeenOtsikko = 'Lisää tehtävä';
    $scope.todoBeingEdited = null;

    $scope.todoList.push({
        "nimi": "siivoaminen",
        "prioriteetti": 3,
        "suoritettu": false
    });
    $scope.todoList.push({
        "nimi": "kuntosali",
        "prioriteetti": 1,
        "suoritettu": false
    });

    sortTodoList();
    $scope.addTodo = function () {
        var prioriteetti = parseInt($scope.prioriteettikentta);
        if (!isNaN(prioriteetti)) {
            $scope.todoList.push({
                "nimi": $scope.nimikentta,
                "prioriteetti": prioriteetti,
                "suoritettu": false
            });
        }
        else {
            alert('prioriteetin on oltava numero!');
            $scope.prioriteettikentta = '';
            return;
        }
        $scope.nimikentta = '';
        $scope.prioriteettikentta = '';
        $scope.laskeTilastot();
        sortTodoList();
    };
    $scope.removeTodo = function (tehtava) {
        $scope.todoList.splice($scope.todoList.indexOf(tehtava), 1);
        $scope.laskeTilastot();
        sortTodoList();
    };
    $scope.editTodo = function (tehtava) {
        $scope.lomakkeenOtsikko = 'Muokkaa tehtävää';
        var index = $scope.todoList.indexOf(tehtava);
        $scope.todoBeingEdited = tehtava;
        $scope.nimikentta = tehtava.nimi;
        $scope.prioriteettikentta = tehtava.prioriteetti;
    };
    $scope.saveTodo = function () {
        var prioriteetti = parseInt($scope.prioriteettikentta);
        if (!isNaN(prioriteetti)) {
            $scope.lomakkeenOtsikko = 'Lisää tehtävä';
            var index = $scope.todoList.indexOf($scope.todoBeingEdited);
            $scope.todoList[index].nimi = $scope.nimikentta;
            $scope.todoList[index].prioriteetti = $scope.prioriteettikentta;
            $scope.nimikentta = '';
            $scope.prioriteettikentta = '';
            $scope.lomakkeenOtsikko = 'Lisää tehtävä';
            $scope.todoBeingEdited = null;
            sortTodoList();
        }
        else {
            alert('prioriteetin on oltava numero!');
            $scope.prioriteettikentta = '';
            return;
        }

    };


    $scope.cancelEdit = function () {
        $scope.nimikentta = '';
        $scope.prioriteettikentta = '';
        $scope.lomakkeenOtsikko = 'Lisää tehtävä';
        $scope.todoBeingEdited = null;
    };
    function sortTodoList() {
        $scope.todoList.sort(function (a, b) {
            return a.prioriteetti - b.prioriteetti;
        });
    }

    $scope.vaihdaStatus = function (tehtava) {
        if (!tehtava.suoritettu) {
            console.log('oli false');
            tehtava.suoritettu = true;
        }
        else {
            console.log('oli true');
            tehtava.suoritettu = false;
        }
        console.log(tehtava.suoritettu);
    };

    $scope.laskeTilastot = function () {

        $scope.tehtavienMaara = $scope.todoList.length;
        $scope.tehtyjenMaara = 0;
        $scope.tekemattomienMaara = 0;
        for (var i = 0; i < $scope.tehtavienMaara; i++) {
            if ($scope.todoList[i].suoritettu)
                $scope.tehtyjenMaara++;
            else
                $scope.tekemattomienMaara++;
        }

    };
    $scope.laskeTilastot();

});


