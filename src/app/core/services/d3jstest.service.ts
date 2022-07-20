import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Graph } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class D3jstestService {
  width = 1200;
  height = 800;
  data: any;
  links: any;
  nodes: any;
  graph: Graph = {} as Graph;
  simulation: d3.Simulation<any, any> = {} as any;

  constructor() {}

  initChart(domElement: any, graph: any) {
    let svg = d3.select(domElement).append('svg').attr('id', 'graph').attr('width', this.width).attr('height', this.height);

    let color = d3.scaleOrdinal(d3.schemeCategory10);

    this.simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3.forceLink().id(function (d: any) {
          return d.id;
        }),
      )
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    this.links = svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter()
      .append('line')
      .attr('stroke-width', function (d: any) {
        return Math.sqrt(d.value);
      });

    this.nodes = svg.append('g').attr('class', 'nodes').selectAll('g').data(graph.nodes).enter().append('g');

    let circles = this.nodes
      .append('circle')
      .attr('r', 5)
      .attr('fill', function (d: any) {
        return color(d.group);
      });

    // Create a drag handler and append it to the node object instead
    let drag_handler = d3.drag().on('start', this.dragstarted).on('drag', this.dragged).on('end', this.dragended);

    drag_handler(this.nodes);

    let lables = this.nodes
      .append('text')
      .text(function (d: any) {
        return d.id;
      })
      .attr('x', 6)
      .attr('y', 3);

    this.nodes.append('title').text(function (d: any) {
      return d.id;
    });

    this.simulation
      .nodes(graph.nodes)
      .on('tick', () => this.ticked())
      .force<d3.ForceLink<any, any>>('link')
      ?.links(graph.links);
  }
  ticked() {
    this.links
      .attr('x1', function (d: any) {
        return d.source.x;
      })
      .attr('y1', function (d: any) {
        return d.source.y;
      })
      .attr('x2', function (d: any) {
        return d.target.x;
      })
      .attr('y2', function (d: any) {
        return d.target.y;
      });

    this.nodes.attr('transform', function (d: any) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  }

  dragstarted(d: any, event: any) {
    if (!event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(d: any, event: any) {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragended(d: any, event: any) {
    if (!event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
}
