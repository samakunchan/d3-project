import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { Graph, GraphNode, types } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class D3jsService {
  width = 1200;
  height = 800;
  radius = 12;
  renderedD3SVG: any;
  zoom: d3.ZoomBehavior<any, any> = {} as any;
  simulation: d3.Simulation<any, any> = {} as any;
  links: any;
  linksText: any;
  nodes: any;
  graph: Graph = {} as Graph;
  types: any[] = types;

  constructor() {}

  initChart(domElement: any, graph: any) {
    this.graph = graph;
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    this.renderedD3SVG = d3.select(domElement).append('svg').attr('id', 'graph').attr('width', this.width).attr('height', this.height);

    const zoom = d3
      .zoom()
      .scaleExtent([1, 2])
      .on('zoom', (event: any) => this.renderedD3SVG.attr('transform', event.transform));

    this.renderedD3SVG
      .on('wheel', () => {})
      .call(zoom)
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(2),
        // .translate(this.width / 2, this.height / 2)
        // .translate(-this.width / 2, -this.height / 2),
      );

    const forceStrength: number = 0.5 * this.graph.nodes.length - 90;
    const strength: number = forceStrength > -5 ? -5 : forceStrength;

    this.simulation = d3
      .forceSimulation()
      .force(
        'link',
        d3
          .forceLink()
          .id(({ id }: any) => id)
          .distance(({ value }: any) => (value === 10 ? 100 : 80)),
      )
      .force('charge', d3.forceManyBody().strength(strength))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));

    // build the arrow for arguments.
    this.renderedD3SVG
      .append('svg:defs')
      .selectAll('marker')
      .data(types) // Different link/path types can be defined here
      .enter()
      .append('svg:marker')
      .attr('fill', ({ type }: any) => this.colorType(type))
      .attr('id', ({ type }: any) => type)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 19)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .style('fill', ({ type }: any) => this.colorType(type));

    // build the arrow for arguments.
    this.renderedD3SVG
      .append('svg:defs')
      .selectAll('marker')
      .data(types) // Different link/path types can be defined here
      .enter()
      .append('svg:marker')
      .attr('fill', ({ type }: any) => this.colorType(type))
      .attr('id', ({ type }: any) => type)
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 19)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .style('fill', ({ type }: any) => this.colorType(type));

    // build the arrow for predicates.
    this.renderedD3SVG
      .append('svg:defs')
      .selectAll('marker')
      .data(types) // Different link/path types can be defined here
      .enter()
      .append('svg:marker')
      .attr('fill', ({ type }: any) => this.colorType(type))
      .attr('id', ({ type }: any) => type + '2')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 28)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto-start-reverse')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');
    // .style('fill', ({ type }: any) => this.colorType(type));

    // AFFICHE LES LIENS
    this.links = this.renderedD3SVG
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(this.graph.links)
      .enter()
      .append('g')
      .attr('class', 'link')
      .attr('idP', ({ source }: any) => source)
      .append('line')
      .attr('idPl', ({ source }: any) => source)
      .attr('stroke', ({ typeT }: any) => this.colorType(typeT))
      .attr('stroke-dasharray', ({ dashed }: any) => (dashed ? 3 : 0))
      .attr('stroke-width', ({ value }: any) => Math.sqrt(value))
      .attr('marker-end', ({ typeT, target }: any) => {
        if (!this.isAPredicate(target, this.graph.nodes, types)) {
          // is not predicate
          return 'url(#' + typeT.toLowerCase() + ')';
        } else {
          // is predicate
          return 'url(#' + typeT.toLowerCase() + '2)';
        }
      })
      .call(
        d3
          .drag()
          .on('start', (event: any, d: any) => this.dragStarted(event, d))
          .on('drag', (event: any, d: any) => this.dragged(event, d))
          .on('end', (event: any, d: any) => this.dragEnded(event, d)),
      );

    // AFFICHE LE TEXT SUR LES LIENS
    this.linksText = this.renderedD3SVG
      .selectAll('.link')
      .data(this.graph.links)
      .append('text')
      .attr('class', 'labelsLink')
      .attr('text-anchor', 'middle')
      .text(({ typeT }: any) => typeT);

    this.nodes = this.renderedD3SVG
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(this.graph.nodes)
      .enter()
      .append('g')
      .attr('fill', ({ group }: any) => colorScale(group));

    // circles
    this.nodes
      .append('circle')
      .attr('r', ({ type }: any) => this.sizeType(type))
      .attr('fill', ({ type }: any) => this.colorType(type, true))
      .attr('stroke-dasharray', ({ dashed }: any) => (dashed ? 2 : 0))
      .call(
        d3
          .drag()
          .on('start', (event: any, d: any) => this.dragStarted(event, d))
          .on('drag', (event: any, d: any) => this.dragged(event, d))
          .on('end', (event: any, d: any) => this.dragEnded(event, d)),
      );

    // labels
    this.nodes
      .append('text')
      .text(({ text }: any) => text)
      .style('fill', ({ type }: any) => this.colorType(type, true))
      .attr('frame', ({ frame }: any) => (frame ? frame : null))
      .attr('wsd', ({ wsd }: any) => (wsd ? wsd : null))
      .attr('entityType', ({ entityType }: any) => entityType)
      .attr('x', ({ type }: any) => 1 + this.sizeType(type))
      .attr('y', 3)
      .on('mouseover', (event: any, d: any) => (d.type.includes('predicate') ? this.mouseOver() : null))
      .on('mouseout', (event: any, d: any) => (d.type.includes('predicate') ? this.mouseOut() : null));

    this.simulation
      .nodes(this.graph.nodes)
      .on('tick', () => this.ticked())
      .force<d3.ForceLink<any, any>>('link')
      ?.links(this.graph.links);

    return this.renderedD3SVG;
  }

  colorType(type: string, isAttribute = false): string {
    let typeLowercase = type.toLowerCase();
    if (isAttribute) {
      if (type.includes('predicate')) {
        return '#d10c02';
      } else {
        return '#b0aee5';
      }
    } else {
      const multipleType = typeLowercase.split(' | ');
      if (multipleType.length > 1) {
        typeLowercase = multipleType[0];
      }
    }

    switch (typeLowercase) {
      case 'predicate':
        return '#d10c02';
      case 'agent':
        return '#e57e00';
      case 'asset':
        return '#e57e00';
      case 'attribute':
        return '#b0aea5';
      case 'beneficiary':
        return '#00ed2f';
      case 'consequence':
        return '#00ed2f';
      case 'destination':
        return '#00ed2f';
      case 'experiencer':
        return '#9d00bc';
      case 'event':
        return '#9d00bc';
      case 'extent':
        return '#9d00bc';
      case 'instrument':
        return '#9d00bc';
      case 'locationfuzzy':
      case 'locationsource':
      case 'locationdestination':
      case 'locationspan':
      case 'locationexact':
      case 'initial_location':
        return '#e52cdd';
      case 'location':
        return '#199600';
      case 'material':
        return '#bf00f4';
      case 'measure':
      case 'measureexact':
        return '#bf00f4';
      case 'patient':
        return '#bf00f4';
      case 'pivot':
        return '#875500';
      case 'pred':
        return '#875500';
      case 'product':
        return '#875500';
      case 'purpose':
        return '#875500';
      case 'source':
        return '#34c5f9';
      case 'stimulus':
        return '#34c5f9';
      case 'theme':
        return '#ffa138';
      case 'time':
      case 'timeexact':
      case 'timeduration':
      case 'timefuzzy':
      case 'timemax':
      case 'timemin':
        return '#002cdd';
      case 'topic':
        return '#e5c300';
      case 'trajectory':
        return '#e5c300';
      case 'recipient':
        return '#8001a3';
      case 'value':
        return '#8001a3';
      default:
        return '#dddddd';
    }
  }

  isAPredicate(id: number, nodes: any[], type: any): boolean {
    let i = 0;
    const length = nodes.length;

    if (length > 0) {
      while (i < length && nodes[i].id !== id) {
        i++;
      }
      return !(i === length || !type.includes(nodes[i].type));
    }

    return false;
  }

  sizeType(type: string): number {
    if (type.includes('predicate')) {
      return 7;
    } else {
      return 5;
    }
  }

  dragStarted(event: any, d: any): void {
    if (!event.active) {
      this.simulation.alphaTarget(0.3).restart();
    }
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(event: any, d: any): void {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragEnded(event: any, d: any): void {
    if (!event.active) {
      this.simulation.alphaTarget(0);
    }
    d.fx = null;
    d.fy = null;
  }

  mouseOver(): void {
    this.nodes
      .select('text')
      .style('fill', ({ type, frame }: any) => (frame ? '#e57e00' : this.colorType(type, true)))
      .text((d: GraphNode) => (d.frame ? `source: ${d.frame}` : d.text));
  }

  mouseOut(): void {
    this.nodes
      .select('text')
      .style('fill', ({ type }: any) => this.colorType(type, true))
      .text((d: GraphNode) => d.text);
  }

  ticked(): void {
    this.links
      .attr('x1', ({ source }: any) => source.x)
      .attr('y1', ({ source }: any) => source.y)
      .attr('x2', ({ target }: any) => target.x)
      .attr('y2', ({ target }: any) => target.y);

    this.linksText
      .attr('x', ({ target, source }: any) => this.xPosition(target, source))
      .attr('y', ({ target, source }: any) => this.yPosition(target, source));

    this.nodes
      .attr('cx', ({ x }: any) => (x = Math.max(this.radius, Math.min(this.width - this.radius, x))))
      .attr('cy', ({ y }: any) => (y = Math.max(this.radius, Math.min(this.height - this.radius, y))))
      .attr('class', ({ idP }: any) => idP)
      .attr('id', ({ id }: any) => id)
      .attr('transform', ({ x, y }: any) => 'translate(' + x + ',' + y + ')');
  }

  xPosition(source: any, target: any): number {
    const angle = Math.atan2(target.y - source.y, target.x - source.x);
    return 30 * Math.cos(angle) + source.x;
  }

  yPosition(source: any, target: any): number {
    const angle = Math.atan2(target.y - source.y, target.x - source.x);
    return 30 * Math.sin(angle) + source.y;
  }
}
