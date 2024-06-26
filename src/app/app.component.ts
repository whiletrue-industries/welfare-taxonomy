import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import mermaid from 'mermaid';
import * as L from 'leaflet';
import { delay, filter, fromEvent, tap, timer } from 'rxjs';
import { diagram as diagramSimplified } from './diagram-simplified';
import { diagram as diagramVocabulary } from './diagram-vocabulary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements AfterViewInit {
  chart = [diagramSimplified, diagramVocabulary];
  currentChart = 1;
  chartSvg: SafeHtml | null = null;
  @ViewChild('chart') chartEl: ElementRef;
  @ViewChild('map') mapEl: ElementRef;
  overlay: L.SVGOverlay;
  map: L.Map;
  svgElementBounds: L.LatLngBoundsLiteral;

  constructor(private domSanitizer: DomSanitizer, private el: ElementRef) {}

  async ngAfterViewInit() {
    mermaid.initialize({
      startOnLoad: false
    });
    await this.render();
    fromEvent<KeyboardEvent>(this.el.nativeElement, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.key === 'c' || event.key === 'C'),
    ).subscribe(() => {
      this.currentChart = (this.currentChart + 1) % this.chart.length;
      this.render();
    });
  }

  async render() {
    const { svg } = await mermaid.render('chart', this.chart[this.currentChart]);
    this.chartSvg = this.domSanitizer.bypassSecurityTrustHtml(svg);

    this.map = this.map || L.map(this.mapEl.nativeElement, {
      crs: L.CRS.Simple,
      // maxZoom: configuration.max_zoom,
      // minZoom: configuration.min_zoom,
      // maxBounds: [[0, 0], [1, 1]],
      // center: [-configuration.dim/2, configuration.dim/2],
      // zoom: configuration.min_zoom + 2,
      zoomControl: true,
      attributionControl: false
    });
    // new L.Control.Zoom({ position: 'bottomleft' }).addTo(this.map);

    if (this.overlay) {
      this.overlay.remove();
    }
    timer(1).pipe(
      tap(() => {
        const svgElement = this.chartEl.nativeElement.querySelector('svg');
        const bounds = svgElement.getBoundingClientRect();
        if (bounds.width > bounds.height) {
          this.svgElementBounds = [ [ 0, 0 ], [ bounds.height/bounds.width, 1 ] ];
        } else {
          this.svgElementBounds = [ [ 0, 0 ], [ 1, bounds.width/bounds.height] ];
        }
        console.log(this.svgElementBounds);
        this.overlay = L.svgOverlay(svgElement, this.svgElementBounds).addTo(this.map);
      }),
      delay(1),
      tap(() => {
        const width = this.svgElementBounds[1][0] - this.svgElementBounds[0][0];
        const height = this.svgElementBounds[1][1] - this.svgElementBounds[0][1];
        const radius = Math.min(width, height) / 2;
        const center = [ this.svgElementBounds[0][0] + width / 2, this.svgElementBounds[0][1] + height / 2 ];
        const bounds: L.LatLngBoundsLiteral = [ [ center[0] - radius, center[1] - radius ], [ center[0] + radius, center[1] + radius ] ];
        this.map.fitBounds(bounds);
        this.chartSvg = null;
      })
    ).subscribe();
  }
}
