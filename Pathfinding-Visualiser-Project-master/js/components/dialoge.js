let dialoge;
const content = [
	{
		body: "This is a short tutorial which will walk you through the features of the project. If you want to dive right in, feel free to press the skip button or press the next button.",
		title: "Welcome to Pathfinding Visualizer"
	}, {
		body: `At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more! All of the algorithms on this application are adapted for a 2D grid, where 90 degree turns have a "cost" of 1 and movements from a node to another have a "cost" of 1.`,
		title: "What is a pathfinding algorithm?"
	}, {
		title: `Meet the algorithms`,
		body: `
			<h3 style="margin-top: 0;">Pathfinding Algorithms</h3>
			<b>Dijkstra's Algorithm:</b> The father of pathfinding algorithms; guarantees the shortest path <br/>
			<b>A* Search:</b> Arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm <br/>
			<b>Breath-first Search:</b> A great algorithm; guarantees the shortest path <br/>
			<b>Breath-first Greedy Search:</b> A great algorithm; guarantees the shortest path and always picks the node having the lowest h score <br/>
			<b>Depth-first Search:</b> A very bad algorithm for pathfinding; does not guarantee the shortest path


			`
	}, {
		title: "Adding walls",
		body: `You can click on a node on the grid to create a wall or you head over to Maze algorithms and select an algorithm to generate a maze. <br/>
			Walls are impenetrable, meaning that a path cannot cross through them.<br/>
			<img src="captures/Adding-Walls.gif" class="dialoge-image"/>`
	}, {
		title: "Dragging Nodes",
		body: `Click and drag the start and target nodes to move them. <br/>
				Note that you can drag nodes even after an algorithm has finished running. This will allow you to instantly see different paths.`
	}, {
		title:"Visualization and More",
		body: `Use the navbar buttons to visualize algorithms and to do other stuff! <br/>
		You can clear the current path, clear walls and weights, clear the entire board, and adjust the visualization speed, all from the navbar. If you want to access this tutorial again, click on "Pathfinding Visualizer" in the top left corner of your screen.`
	}, {
		title: "Enjoy",
		body: `I hope you have just as much fun playing around with this visualization tool as I had building it! </br>
		`
	}
];

window.addEventListener('DOMContentLoaded', () => {
	dialoge = document.getElementsByClassName('dialoge')[0];
	dialoge.style.display = "grid";

	let index = 0;
	let body = dialoge.getElementsByClassName('dialoge-body')[0];
	let title = dialoge.getElementsByClassName('dialoge-title')[0]

	dialoge.querySelector("#next").addEventListener('click', () => {
		if (index === content.length - 1) {
			dialoge.remove();
			return;
		} else if (index === content.length - 2) {
			dialoge.querySelector("#next").innerHTML = "Finish";
		}
		index++;
		body.innerHTML = content[index].body;
		title.innerHTML = content[index].title;
	});

	dialoge.querySelector("#back").addEventListener('click', () => {
		if (index - 1 != -1) {
			index -= 1;
			if (index === content.length - 2) {
				dialoge.querySelector("#next").innerHTML = "Next";
				console.log("sd")
			} else {
			}
			body.innerHTML = content[index].body;
			title.innerHTML = content[index].title;
		}
	});

	dialoge.querySelector("#skip").addEventListener('click', () => {
		dialoge.remove();
	});
});
