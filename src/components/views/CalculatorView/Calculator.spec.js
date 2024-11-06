import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import Calculator from './Calculator.vue'

describe('CalculatorView.vue', () => {
  let wrapper

  // Abans de cada prova, muntarem una nova instància del component CalculatorView
  beforeEach(() => {
    wrapper = mount(Calculator)
  })

  it("mostra el valor d'entrada correctament quan s'afegixen números", async () => {
    await wrapper.vm.appendValue('5')
    await wrapper.vm.appendValue('3')
    expect(wrapper.vm.input).toBe('53')
  })

  it('calcula les expressions correctament', async () => {
    wrapper.vm.input = '12+8'
    await wrapper.vm.calculate()
    expect(wrapper.vm.input).toBe(20)
  })

  it('mostra "Error" quan s\'intenta calcular una expressió no vàlida', async () => {
    wrapper.vm.input = '5+/2'
    await wrapper.vm.calculate()
    expect(wrapper.vm.input).toBe('Error')
  })

  it("neteja l'entrada quan es prem el botó de netejar", async () => {
    wrapper.vm.input = '45'
    await wrapper.vm.clearInput()
    expect(wrapper.vm.input).toBe('')
  })

  it("elimina correctament l'últim caràcter", async () => {
    wrapper.vm.input = '456'
    await wrapper.vm.deleteLast()
    expect(wrapper.vm.input).toBe('45')
  })

  it("gestiona un flux complet d'operacions d'addició", async () => {
    // Simula les presses de botó per 5 + 5 =
    await wrapper.vm.appendValue('5')
    await wrapper.vm.appendValue('+')
    await wrapper.vm.appendValue('5')
    await wrapper.vm.calculate()
    expect(wrapper.vm.input).toBe(10)
  })

  it("gestiona correctament l'entrada decimal", async () => {
    await wrapper.vm.appendValue('3')
    await wrapper.vm.appendValue('.')
    await wrapper.vm.appendValue('5')
    expect(wrapper.vm.input).toBe('3.5')
  })
})
